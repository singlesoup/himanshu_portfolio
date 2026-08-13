from PIL import Image
import numpy as np

TILE = 64  # final tile size per frame (pixel-art, scaled up by CSS)

def key_and_crop(path):
    img = Image.open(path).convert("RGB")
    arr = np.asarray(img).astype(np.int16)
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    # magenta: high R, low G, high B
    magenta = (r > 150) & (g < 110) & (b > 150)
    alpha = np.where(magenta, 0, 255).astype(np.uint8)
    rgba = np.dstack([arr.astype(np.uint8), alpha])
    out = Image.fromarray(rgba, "RGBA")
    # crop to non-transparent bbox
    bbox = out.getbbox()
    out = out.crop(bbox)
    return out

def fit_center(im, size):
    # scale down preserving aspect into size x size, nearest to keep pixel look
    w, h = im.size
    scale = min(size / w, size / h)
    nw, nh = max(1, int(round(w * scale))), max(1, int(round(h * scale)))
    im = im.resize((nw, nh), Image.NEAREST)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(im, ((size - nw) // 2, (size - nh) // 2), im)
    return canvas

up = fit_center(key_and_crop("/tmp/up.jpg"), TILE)
down = fit_center(key_and_crop("/tmp/down.jpg"), TILE)

sheet = Image.new("RGBA", (TILE * 2, TILE), (0, 0, 0, 0))
sheet.paste(up, (0, 0), up)
sheet.paste(down, (TILE, 0), down)
sheet.save("/tmp/dragonite-sheet.png")

# also save single facing-right for reference
up.save("/tmp/dragonite-single.png")

import base64
with open("/tmp/dragonite-sheet.png", "rb") as f:
    data = f.read()
print("PNG bytes:", len(data))
b64 = base64.b64encode(data).decode()
print("BASE64_LEN", len(b64))
with open("/tmp/sheet_b64.txt", "w") as f:
    f.write("data:image/png;base64," + b64)
print("saved b64")

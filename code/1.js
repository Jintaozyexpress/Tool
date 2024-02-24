function compressImagesAndCreateZip(startNumber, files) {
    const zip = new JSZip();
    let count = 0;

    function processFile(file, index) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                // 压缩图片到指定大小（50%）
                const targetWidth = img.width * 0.5;
                const targetHeight = img.height * 0.5;

                canvas.width = targetWidth;
                canvas.height = targetHeight;

                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

                // 将压缩后的图片转换为 base64 格式
                const compressedBase64 = canvas.toDataURL("image/webp");

                // 将压缩后的图片添加到 JSZip 对象中
                zip.file(`${parseInt(startNumber) + index}.webp`, compressedBase64.split(',')[1], {
                    base64: true
                });

                count++;

                if (count === files.length) {
                    finish();
                }
            };

            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }

    function finish() {
        zip.generateAsync({
                type: "blob"
            })
            .then(function (blob) {
                const zipFileName = `compressed_images_${startNumber}_to_${parseInt(startNumber) + count - 1}.zip`;

                const downloadLink = document.createElement("a");
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = zipFileName;

                downloadLink.click();
            });
    }

    for (let i = 0; i < files.length; i++) {
        processFile(files[i], i);
    }
}


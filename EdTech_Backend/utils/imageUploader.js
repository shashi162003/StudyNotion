const cloudinary = require("cloudinary").v2

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder }
  if (height) {
    options.height = height
  }
  if (quality) {
    options.quality = quality
  }
  options.resource_type = "auto"
  console.log(`[CLOUDINARY] Starting upload to folder: ${folder}${height ? ` (height: ${height}px)` : ''}${quality ? ` (quality: ${quality})` : ''}`)
  
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);
    console.log(`[CLOUDINARY] Upload successful: ${result.secure_url}`);
    return result;
  } catch (error) {
    console.error(`[CLOUDINARY ERROR] Failed to upload image: ${error.message}`);
    throw error; // Re-throw to allow calling function to handle the error
  }
}

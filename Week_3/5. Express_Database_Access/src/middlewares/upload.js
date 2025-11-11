import sharp from 'sharp';
import path from 'path';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  console.log(req.file.path)
  ;
  // TODO: use file path to create 160x160 png thumbnail with sharp
  
  try {
    const originalPath = req.file.path;
    const thumbPath = path.join(
      path.dirname(originalPath),
      `${req.file.filename}_thumb.png`
    );

    //Resizes and saves the thumbnail
    await sharp(originalPath)
      .resize(160, 160)
      .png()
      .toFile(thumbPath);

    console.log('Thumbnail created at:', thumbPath);
    next();
  } catch (error) {
    console.error('Sharp error:', error);
    next(error);
  }
};

export { createThumbnail };
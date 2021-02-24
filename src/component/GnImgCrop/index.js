import React, { useState, useCallback, useRef } from "react";
// import ReactDOM from "react-dom";
import Cropper from "react-easy-crop";
import { Modal } from "@material-ui/core";
import { getCroppedImg, readFile } from "./utils";
import NoImg from "./noimg.jpg";

export default function App(props) {
  const [imageSrc, setImageSrc] = React.useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  // const [CropedImg, setCropedImg] = useState();
  // const [rotation, setRotation] = useState(0);
  const inputEl = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(
    props.defImg ? props.defImg : NoImg
  );
  const [modalOpen, setModalOpen] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      // console.log({ croppedImage });
      setCroppedImage(croppedImage);
      props.onImgCroped(croppedImage);
      setModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  const onFileChange = async (e) => {
    setCroppedImage(null);

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setModalOpen(true);
    }
  };
  function handleImgClicked() {
    console.log("img clicked");
    //click or focus
    inputEl.current.click();
  }

  return (
    <div className="flex-col">
      <div className={props.isHidden ? "dnone" : ""}>
        {/* INPUT */}
        <input
          type="file"
          onChange={onFileChange}
          accept="image/*"
          ref={inputEl}
        />
        <input type="text" name="cropedimg" defaultValue="noimg" />
      </div>

      {/* OUTPUT */}
      <div className={props.imgClass}>
        <img src={croppedImage} alt="noimg" onClick={handleImgClicked} />
      </div>

      {/* CROPER IN MODAL */}
      <Modal open={modalOpen}>
        <div className="modal_content">
          <div className="cropper_container">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={4 / 4}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <button onClick={showCroppedImage}>Done</button>
        </div>
      </Modal>
    </div>
  );
}

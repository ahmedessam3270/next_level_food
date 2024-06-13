"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const ref = useRef();
  function pickImage() {
    ref.current.click();
  }

  function handleImagePreview(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="the image picked by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={ref}
          onChange={handleImagePreview}
          required
        />
        <button className={classes.button} type="button" onClick={pickImage}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

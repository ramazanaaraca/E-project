import { useState } from "react";
import Avatar from "~/assets/avatar.png"
import Camera from "~/assets/camera.svg"

function ImgFıle() {

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
    setImage(URL.createObjectURL(event.target.files[0]));
    }
    }
    return(
        <div className="relative">
            <img src={image ? image : Avatar} alt="" className="max-w-[80px] max-h-[81px] object-cover rounded-full" width={80} height={81} />
            <div className="absolute right-0 -bottom-1">
                <label className="bg-black p-1.5 rounded-full border-2 border-white block cursor-pointer">
                    <img src={Camera} alt="" width={20} height={20}/>
                    <input type="file" className="hidden" onChange={onImageChange}/>
                </label>
            </div>
        </div>
    )
}

export default ImgFıle
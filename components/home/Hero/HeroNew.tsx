"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageSlider from "@/components/Diff";
import NewVideo from "@/components/Video";
import FileUpload from "@/components/FileUpload";
import DottedButton from "@/components/DottedButton";

// #65152f dark light #98204f

const videoSrc =
  "https://cdn.discordapp.com/attachments/1179870788640317562/1184817526006370345/video_2160p-2.mp4?ex=658d5a4f&is=657ae54f&hm=adaa7a109a61cf5039c20b1722db9e27fac99db75e18a95fa14d60a4b73d1c5e&";

export default function Hero() {
  return (
    <section
      id="hero"
      // className={`flex flex-col justify-center items-center w-screen space-y-20 bg-gradient-to-r from-pink-700 via-pink-700 to-pink-900 text-red-100`}
      className={`flex flex-col justify-center items-center w-screen text-white mt-20`}
    >
      {/* <div className="w-full mx-auto h-full">
        <div className="flex h-full">
          <div className="flex flex-col justify-center items-center h-screen w-2/5">
            <div className="flex flex-col justify-center h-1/2 w-full">
              <FileUpload />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center ">
        <div className="flex justify-center items-center px-5 ">
          <div className="text-white max-w-sm space-y-4 flex flex-col justify-end">
            <span className="block text-5xl leading-[62px] tracking-wider">
              江秉承虛擬人專業虛擬人製造所
            </span>
            <span className="text-xl text-pink-100/70 block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </div>
          <NewVideo src={videoSrc}/>
        </div>
        <DottedButton label="了解更多" />
      </div>
    </section>
  );
}

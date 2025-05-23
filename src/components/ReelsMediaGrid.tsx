import React from "react";
import MediaItem from "./MediaItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaGridProps {
  className?: string;
}

const ReelsMediaGrid: React.FC<MediaGridProps> = ({ className = "" }) => {

  const advertisement = [
    {
      id: "reel-1",
      title: "MERN Stack Course Advertisement",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025199/vlcsnap-2025-05-23-23h53m39s797_b4l57l.png",
      mediaUrl:
        "player.vimeo.com/video/1087025688?h=4a0d5f317f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
    {
      id: "reel-2",
      title: "Learn WebD for Free!",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025199/vlcsnap-2025-05-23-23h55m28s589_zk6rrq.png",
      mediaUrl:
        "https://player.vimeo.com/video/1087029394?h=fadbac8a27&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
    {
      id: "reel-3",
      title: "Learn UI/UX for Free!",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025199/vlcsnap-2025-05-23-23h56m06s656_wiikbe.png",
      mediaUrl:
        "https://player.vimeo.com/video/1087030616?h=726195a59c&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
    
    {
      id: "reel-4",
      title: "Have an Organic Growth!",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025199/vlcsnap-2025-05-23-23h57m05s021_lofdpm.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086890434?h=06e003a706&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
  ];

  const modelling = [
    {
      id: "reel-1",
      title: "Hermosa",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025201/vlcsnap-2025-05-23-23h58m59s464_ytkpzt.png",
      mediaUrl:
        "https://player.vimeo.com/video/1087026455?h=d2426af50b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: "reel-2",
      title: "Red in Motion",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025200/vlcsnap-2025-05-23-23h59m25s923_xiyanx.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086891083?h=dd5e97d455&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
    {
      id: "reel-3",
      title: "Dark light",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025201/vlcsnap-2025-05-24-00h01m34s916_yo5dxw.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086890261?h=f7ee7c42a1&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
    {
      id: "reel-4",
      title: "Saree Girl",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025202/vlcsnap-2025-05-24-00h00m31s847_vtvxpp.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086889926?h=aedd5512da&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
  ];

const promotion = [
    {
      id: "reel-1",
      title: "Parampara Jwellers",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025199/vlcsnap-2025-05-23-23h57m42s297_shbovc.png",
      mediaUrl:
        "https://player.vimeo.com/video/1087191615?h=17111b782a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: "reel-2",
      title: "Preparing Fest",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025201/vlcsnap-2025-05-23-23h58m01s747_aiysgh.png",
      mediaUrl:
        "https://player.vimeo.com/video/1087034060?h=8ba8022d28&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    
  ];

  const fest = [
    {
      id: "reel-1",
      title: "Fest Preparation",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025201/vlcsnap-2025-05-23-23h58m01s747_aiysgh.png",
      mediaUrl:
        "https://player.vimeo.com/video/1087034060?h=8ba8022d28&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    
    {
      id: "reel-2",
      title: "Farewell 2k25",
      type: "reel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1748025202/vlcsnap-2025-05-24-00h02m20s530_azxkpm.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086889783?h=36dc9c5d9a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Reels",
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue="advertisement" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-zinc-800 border border-zinc-700">
          <TabsTrigger
            value="advertisement"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Advertisements
          </TabsTrigger>
          <TabsTrigger
            value="promotion"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Promotion
          </TabsTrigger>
          <TabsTrigger
            value="modelling"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Modelling
          </TabsTrigger>
          <TabsTrigger
            value="fest"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Fest / Occasion
          </TabsTrigger>
        </TabsList>

        <TabsContent value="advertisement" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advertisement.map((item) => (
              <MediaItem
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                thumbnailUrl={item.thumbnailUrl}
                mediaUrl={item.mediaUrl}
                category={item.category}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="promotion" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promotion.map((item) => (
              <MediaItem
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                thumbnailUrl={item.thumbnailUrl}
                mediaUrl={item.mediaUrl}
                category={item.category}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="modelling" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelling.map((item) => (
              <MediaItem
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                thumbnailUrl={item.thumbnailUrl}
                mediaUrl={item.mediaUrl}
                category={item.category}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fest" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fest.map((item) => (
              <MediaItem
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                thumbnailUrl={item.thumbnailUrl}
                mediaUrl={item.mediaUrl}
                category={item.category}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReelsMediaGrid;

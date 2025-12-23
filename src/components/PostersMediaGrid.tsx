import MediaItem from "./MediaItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaGridProps {
  className?: string;
}

const MediaGrid: React.FC<MediaGridProps> = ({ className = "" }) => {
  // Sample media items for each category
  const cinematicVideos = [
    {
      id: "cinematic-1",
      title: "Photoholic",
      type: "image",
      thumbnailUrl:"https://res.cloudinary.com/doy34nvkz/image/upload/v1733432107/photo_copy_w9opzb.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432107/photo_copy_w9opzb.jpg",
      category: "",
    },
    {
      id: "cinematic-2",
      title: "Hair Styling",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432109/HairStyling_copy_eamv0k.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432109/HairStyling_copy_eamv0k.jpg",
      category: "",
    },
    {
      id: "cinematic-3",
      title: "Band Night",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432105/Band_night_copy_w6jf9u.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432105/Band_night_copy_w6jf9u.jpg",
      category: "",
    },
    {
      id: "cinematic-4",
      title: "Birth Anniversary",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431831/bhimrao_1_tdrbbi.png",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431831/bhimrao_1_tdrbbi.png",
      category: "",
    },
    {
      id: "cinematic-5",
      title: "World Cancer Day",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431830/CancerDay_1_cexcge.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431830/CancerDay_1_cexcge.jpg",
      category: "",
    },
    {
      id: "cinematic-6",
      title: "Dramatics",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431822/Drama_heats_22_tzebwv.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431822/Drama_heats_22_tzebwv.jpg",
      category: "",
    },
    {
      id: "cinematic-7",
      title: "Summer Party",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431823/SummerParty_usqzql.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431823/SummerParty_usqzql.jpg",
      category: "",
    },
    {
      id: "cinematic-8",
      title: "Dhanteras",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431823/Dhanteras_Poster_aahfjk.png",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733431823/Dhanteras_Poster_aahfjk.png",
      category: "",
    },
    {
      id: "cinematic-9",
      title: "Independence Day",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/IndependenceDay-123_dg86s1.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/IndependenceDay-123_dg86s1.jpg",
      category: "",
    },
    {
      id: "cinematic-10",
      title: "Abroad Promotional",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/GNH_-_03_nu3td3.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/GNH_-_03_nu3td3.jpg",
      category: "",
    },
    {
      id: "cinematic-12",
      title: "Abroad Promotion",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/GNH-18_1_dcjvoq.jpg",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/GNH-18_1_dcjvoq.jpg",
      category: "",
    },
    {
      id: "cinematic-11",
      title: "Independence Day",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/Independence-cAI_gyjtfz.gif",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1766524506/Independence-cAI_gyjtfz.gif",
      category: "",
    },
  ];

  const reels = [
    {
      id: "reel-1",
      title: "Data Science Corousel",
      type: "corousel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432103/1_1_vz7age.png",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432103/1_1_vz7age.png",
      category: "",
    },
    {
      id: "reel-2",
      title: "Data Science Corousel",
      type: "corousel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432103/3_1_s16mct.png",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432103/3_1_s16mct.png",
      category: "",
    },
    {
      id: "reel-3",
      title: "Data Science Corousel",
      type: "corousel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432102/2_1_n0d9ak.png",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432102/2_1_n0d9ak.png",
      category: "",
    },
    {
      id: "reel-4",
      title: "Data Science Corousel",
      type: "corousel",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432102/4_1_elavjn.png",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432102/4_1_elavjn.png",
      category: "",
    },
  ];


  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue="cinematic" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-800 border border-zinc-700">
          <TabsTrigger
            value="cinematic"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Posters
          </TabsTrigger>
          <TabsTrigger
            value="reels"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Corousels
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cinematic" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cinematicVideos.map((item) => (
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

        <TabsContent value="reels" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reels.map((item) => (
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

export default MediaGrid;

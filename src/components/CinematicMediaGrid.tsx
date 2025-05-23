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
      title: "Mansarovar",
      type: "video",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1747980410/vlcsnap-2025-05-23-11h35m49s457_cwkeyf.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086888711?h=6d9499a2a9&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Cinematic",
    },
    
    {
      id: "cinematic-2",
      title: "Muskaane Jhoothi h",
      type: "video",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1747980410/vlcsnap-2025-05-23-11h36m08s066_hrlxdg.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086889437?h=0a316a8dba&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Cinematic",
    },
    
    {
      id: "cinematic-3",
      title: "Last Days",
      type: "video",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1747980410/vlcsnap-2025-05-23-11h36m21s149_tsn3rm.png",
      mediaUrl:
        "https://player.vimeo.com/video/1086889267?h=0dca4c5f8e&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      category: "Cinematic",
    },
  ];

  const reels = [
    {
      id: "reel-1",
      title: "Product Showcase",
      type: "video",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      mediaUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432109/HairStyling_copy_eamv0k.jpg",
      category: "Reels",
    },
    {
      id: "reel-2",
      title: "Fashion Highlights",
      type: "video",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      mediaUrl:
        "https://player.vimeo.com/external/373793431.sd.mp4?s=d47c02a21dc61e8b269a314d5b3fe7a7c4f6712c&profile_id=165",
      category: "Reels",
    },
    {
      id: "reel-3",
      title: "Travel Moments",
      type: "video",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      mediaUrl:
        "https://player.vimeo.com/external/368484050.sd.mp4?s=ea1c5b1fdc8877415fd66ab4a01a85d62d434ebc&profile_id=165",
      category: "Reels",
    },
    {
      id: "reel-4",
      title: "Food Story",
      type: "video",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      mediaUrl:
        "https://player.vimeo.com/external/363625327.sd.mp4?s=03c65e05b96b1ed7ca4b8659b7a3b139c5e8e5c7&profile_id=165",
      category: "Reels",
    },
  ];

  const posters = [
    {
      id: "poster-1",
      title: "Music Festival",
      type: "image",
      thumbnailUrl:
        "https://res.cloudinary.com/doy34nvkz/image/upload/v1733432109/HairStyling_copy_eamv0k.jpg",
      mediaUrl:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=90",
      category: "Posters",
    },
    {
      id: "poster-2",
      title: "Art Exhibition",
      type: "image",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=800&q=80",
      mediaUrl:
        "https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=1200&q=90",
      category: "Posters",
    },
    {
      id: "poster-3",
      title: "Tech Conference",
      type: "image",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      mediaUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=90",
      category: "Posters",
    },
    {
      id: "poster-4",
      title: "Film Premiere",
      type: "image",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      mediaUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=90",
      category: "Posters",
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
            Cinematic Videos
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

        {/* <TabsContent value="reels" className="mt-0">
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

        <TabsContent value="posters" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posters.map((item) => (
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
        </TabsContent> */}

      </Tabs>
    </div>
  );
};

export default MediaGrid;

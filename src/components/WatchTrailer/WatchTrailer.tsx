import { Dialog, DialogContent } from "@/components/ui/dialog";
import TrailerVideo from "../TrailerVideo/TrailerVideo";

function WatchTrailer({ isOpen, onClose, youtubeId }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-none w-[500px] h-[400px]">
        <div className="mx-auto my-auto ">
          <TrailerVideo link={youtubeId} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WatchTrailer;


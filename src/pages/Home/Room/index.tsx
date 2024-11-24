import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();

  const myMeeting = async (element: any) => {
    const appID = 1115665487;
    const serverSecret = "3b7c41ba04f5ea7099de22f67fda883f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId || "default",
      Date.now().toString(),
      "Bhuwneshwar Mandal"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:5173/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      //   showScreenSharingButton: false,
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;

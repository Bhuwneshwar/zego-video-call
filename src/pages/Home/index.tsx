import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomCode, setRoomCode] = useState<string>("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${roomCode}`);
  }, [navigate, roomCode]);
  return (
    <div>
      <input
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
}

export default Home;

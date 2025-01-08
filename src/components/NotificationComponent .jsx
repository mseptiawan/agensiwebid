import { toast } from "react-hot-toast";

const NotificationComponent = () => {
  const showSuccessNotification = () => {
    toast.success("Pesan Anda berhasil dikirim!", {
      style: {
        border: "1px solid #4CAF50",
        padding: "16px",
        color: "#4CAF50",
      },
      iconTheme: {
        primary: "#4CAF50",
        secondary: "#FFF",
      },
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={showSuccessNotification}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded m-2"
      >
        Notifikasi Sukses
      </button>
    </div>
  );
};

export default NotificationComponent;

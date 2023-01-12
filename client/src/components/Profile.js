export default function Profile() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div>
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt="avatar"
          />{" "}
          <h5>Saatvik</h5>
          <h5>Email - saatvik@gmail.com</h5>
        </div>

        <blockquote class="text-xl italic font-semibold text-gray-900 ">
          <p>"If it works, don't touch it"</p>
        </blockquote>
      </div>
    </>
  );
}

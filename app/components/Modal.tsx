function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <dialog open>
        {children}
        <form method="dialog">
          <button className=" border-2 rounded-md">OK</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;

export function StatusChanger(props) {
  const newStatus = props.statusText;

  // 2)
  // onStatusChange wurde in App.js definiert und übergeben
  // hier wird es über props abgerufen
  const buttonClicked = () => props.onStatusChange(newStatus);

  return (
    <button type="button" onClick={buttonClicked}>
      {newStatus}
    </button>
  );
}

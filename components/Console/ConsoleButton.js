import Button from "../ui/Button";

function ConsoleButton() {
  const handleClick = async () => {
    // const res = await fetch("/api/google/auth");
    console.log("button clicked");
  };

  return (
    <Button type="button" onClick={handleClick}>
      Connect with your search console
    </Button>
  );
}

export default ConsoleButton;

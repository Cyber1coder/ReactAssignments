import MessageCard from "./MessageCard";

function App(){
  return(
    <div>
      <MessageCard title="Welcome" message="This is the first message" />
      <MessageCard title="Info" message="React uses props to pass data" />
      <MessageCard title="Alert" message="This is an important alert" />
      <MessageCard title="Success" message="Task completed successfully" />
  
  </div>
  )
}
export default App;
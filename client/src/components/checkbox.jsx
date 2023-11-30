import { useState } from "react"

export const Checkbox = () => {
  const [isChecked, setChecked] = useState(false)
  const checkHandler = () => {
    setChecked(!isChecked)
  }
  return (
    <div>
      <input type="checkbox"
        id="Add a Reserve"
        checked={isChecked}
        onChange={checkHandler} />
      <label>Add a Reserve</label>
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  )
}

function Check() {
  return (
    <div className="Reserve">
      <Checkbox />
    </div>
  )
}

export default Check()
import { useState,Button, Text, View, StatusBar } from "react";
import axios from "axios";
import DateTimerPicker from "react-date-picker";
import { Link, useNavigate } from "react-router-dom";
export default function Datetimepicker() {

	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	const [text, setText] = useState("Empty");

	const onChange = (e, selectedDate) => {
		setDate(selectedDate);
		setShow(false);
	}

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	}

	return (
		<View style={StyleSheet.container}>
			<Button title="Select Date" onPress={() => showMode("date")} />
			<Button title="Select Time" onPress={() => showMode("time")} />
			{show && (
				<DateTimerPicker
					value={date}
					mode={mode}
					is24hour={true}
					onChange={onChange}
				/>
			)}
			<Text>{date.toLocaleString()}</Text>
			<StatusBar> style = "auto" </StatusBar>
		</View>
	)
}

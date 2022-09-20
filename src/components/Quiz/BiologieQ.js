import {
  Animated,
  Modal,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import data from "../../consts/QuizData";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const {width, height} = Dimensions.get('window');

const BiologieQ = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      setScore(score + 1);
    }

    // Show next button
    setShowNextButton(true);
  };

  const handleText = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restartQuiz = () => {
    setShowScoreModal(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View style={{ marginVertical: 20 }}>
        {/* Question counter */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent:'center', backgroundColor:'#b3d1ff', width:'10%', left:width/2.5}}>
          <Text style={{ fontSize: 20, opacity: 0.6  }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ fontSize: 18, opacity: 0.6 }}>
            /{allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text style={{ fontSize: 22, top:10, textAlign:'center' }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const renderOption = () => {
    return (
      <View style={{top:5, height:'auto', justifyContent:'space-between'}}>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              height:60,
              borderRadius:25,
              borderWidth: 3,
              marginVertical:5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              borderColor:
                option == correctOption
                  ? "green"
                  : option == currentOptionSelected
                  ? "red"
                  : "#4d94ff" + "40",
              backgroundColor:
                option == correctOption
                  ? "green" + "20"
                  : option == currentOptionSelected
                  ? "red" + "20"
                  : "#4d94ff" + "20",
            }}
          >
            <Text style={{ fontSize: 18, flexWrap:'wrap' }}>{option}</Text>

            {/* Show Check or Cross Icon based on answer correct */}
            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "green",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{ color: "white", fontSize: 20 }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleText}
          style={{
            marginTop: 20,
            width: "100%",
            padding: 20,
            borderRadius: 5,
            backgroundColor: "#3399ff",
          }}
        >
          <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            Suivant
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: 20,
          height:10,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            { height: 10, borderRadius: 20, backgroundColor: "green" },
            { width: progressAnim },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingVertical:10,
          paddingHorizontal: 16,
          position: "relative",
        }}
      >
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOption()}

        {/* Next button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              backgroundColor: "#809fff",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                padding: 20,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {score > allQuestions.length / 2 ? "Félicitations!" : "Oops!"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: score > allQuestions.length / 2 ? "green" : "red",
                  }}
                >
                  {score}
                </Text>
                <Text style={{ fontSize: 20 }}>/{allQuestions.length}</Text>
              </View>
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: "#3399ff",
                  padding: 20,
                  borderRadius: 20,
                  width: "100%",
                }}
              >
                <Text
                  style={{ textAlign: "center", fontSize: 20, color: "white" }}
                >
                  Refaire le Quiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default BiologieQ;

const styles = StyleSheet.create({});

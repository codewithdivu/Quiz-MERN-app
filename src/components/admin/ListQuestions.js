import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosDelete, axiosGet } from "../../axios/config";

const ListQuestions = () => {
  const [questions, setQuestions] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      setIsLoading(true);

      try {
        const response = await axiosGet("api/v1/test");
        if (response.status) {
          //   console.log(response.data.Questions);
          setQuestions(response.data.Questions);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchQuestion();
  }, [questions]);

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      const response = await axiosDelete(`api/v1/test/${id}`);
      if (response.status) {
        setIsDeleting(false);
      }
    } catch (error) {
      console.log(error);
      alert("there is some isssues");
      setIsDeleting(false);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/listQuestions/${id}`);
    console.log("updateId", id);
  };

  return (
    <div className="listQuestions">
      {questions?.map((question, index) => (
        <div key={index} className="question">
          <h1>{question?.title}</h1>
          <div className="options">
            {question?.options?.map((option) => (
              <h4>{option}</h4>
            ))}
          </div>
          <div className="btns">
            <button
              className="btnDelete"
              onClick={() => handleDelete(question._id)}
            >
              {isDeleting ? "Deleting....." : "Delete"}
            </button>
            <button
              className="btnEdit"
              onClick={() => handleUpdate(question._id)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListQuestions;

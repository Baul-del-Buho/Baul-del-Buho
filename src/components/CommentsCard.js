import React from "react";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import { getComments as getCommentsApi } from "../CommApi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardText, CardGroup } from "reactstrap";
import "../index.css";

function CommentsCard({ currentUserId }) {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => (backendComment.parentId = null)
  );
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  // console.log("backendComments", backendComments);
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);
  return (
    <div className="cards">
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag="h2">Comentarios</CardTitle>
            <CardText>
              {rootComments.map((rootComment) => (
                <Comment
                  key={rootComment.id}
                  comment={rootComment.body}
                  replies={getReplies(rootComment.id)}
                />
              ))}
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h2"></CardTitle>
            <CardText></CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h2"></CardTitle>
            <CardText></CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CommentsCard;

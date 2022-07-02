import React from "react";
import { useDispatch } from "react-redux";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";

function QuoteCard({ quote }) {
  const dispatch = useDispatch();

  function handleUpvote() {
    dispatch(upvoteQuote(quote.id));
  }

  function handleDownvote() {
    dispatch(downvoteQuote(quote.id));
  }

  function handleRemove() {
    dispatch(removeQuote(quote.id));
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>
              - author <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={handleUpvote}
              type="button"
              className="btn btn-primary"
            >
              Upvote
            </button>
            <button
              onClick={handleDownvote}
              type="button"
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              onClick={handleRemove}
              type="button"
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;

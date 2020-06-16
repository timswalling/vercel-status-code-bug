import React from "react";

function Error({ errStatusCode, resStatusCode, statusCode }) {
  return (
    <main>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
      <dl>
        <dt>Error status code</dt>
        <dd>{errStatusCode || "Not set"}</dd>
        <dt>Response status code</dt>
        <dd>{resStatusCode || "Not set"}</dd>
      </dl>
    </main>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  const errStatusCode = err && err.statusCode;
  const resStatusCode = res && res.statusCode;

  return { errStatusCode, resStatusCode, statusCode };
};

export default Error;

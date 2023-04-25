import moment from "moment";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const SessionDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function SessionDetails({ data }) {
  return (
    <SessionDetailsWrap>
      <div>
        <h2>
          {data.title} id:{data.id}
        </h2>
      </div>
      <div>
        {moment(data.date).format("MMMM D, yyyy")}
        <br />
        {moment(data.date).format("h:mm a")}
      </div>

      <div>{data.status}</div>
      <div>{data.type}</div>
      <div>{data.notes}</div>
    </SessionDetailsWrap>
  );
}

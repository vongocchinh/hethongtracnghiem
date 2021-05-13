import React from "react";
import Paper from "@material-ui/core/Paper";
import CommentIcon from "@material-ui/icons/Comment";
import { Grid } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
export default function item(props) {
  var { value } = props;
  return (
    <>
      <Grid key={value} item>
        <Paper className="item-course-layout">
          <p className="name-header-course-1">
            {value.data.name}
            <CommentIcon className="CommentIcon" size="small" color="primary" />
          </p>
          <p className="name-header-course-2">
            <span>Giới thiệu khóa học:</span>
            <br />
            {value.data.des}.
          </p>
          <p className="name-header-course-4">
            <span>Người Đứng Lớp:</span> {value.data.name1}
          </p>
          <p className="name-header-course-4">
            <span>Hổ trợ:</span> {value.data.name2}
          </p>
          <p className="name-header-course-4">
            <span>Thời gian học:</span> {value.data.time}
          </p>
          <p className="name-header-course-4">
            <span>Phòng:</span> {value.data.room}
          </p>
          <p  className="name-header-course-4"><span>Tài liệu:</span>
            <a target="_bank" href={value.data.document} ><GetAppIcon className="GetAppIcon" size="small" color="primary" /></a>
          </p>
        </Paper>
      </Grid>
    </>
  );
}

import React, { useState } from "react";
import "./styles.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import { Link } from "react-router-dom";
export default function HomeLeft(props) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  var { CategoryDetailStore,QuestionStore } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
    props.checkCode(code);
  };
  const handleCloses = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const onChange=(e)=>{
    setCode(e.target.value);
  }
  return (
    <>
      {CategoryDetailStore.data && QuestionStore ? (
        <>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Mã Code
              </DialogContentText>
              <form onSubmit={handleClose}>
                <input className="ipcode" autoComplete="off" name="code" onChange={onChange} />
              </form>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleCloses} color="default">
                Thoát
              </Button>
              <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                Bắt Đầu
              </Button>
            </DialogActions>
          </Dialog>
          <div className="container-main-right-layout">
            <p>{CategoryDetailStore.data.name}</p>
            <p>Tổng số câu hỏi : {QuestionStore.length}</p>
            <p>Thời gian lam bài :{CategoryDetailStore.data.time} phút</p>
            <p>Người ra đề : CLB TIN HỌC</p>
            <p>Ngày Biên soạn : {new Date(CategoryDetailStore.data.date.seconds*1000).toDateString()}</p>
            <div>
              <a to={"/thi/"+CategoryDetailStore.id}  onClick={handleClickOpen} href="###">
                Bắt Đầu
              </a>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

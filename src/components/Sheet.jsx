import React from "react";
import QuarterNoteDown from './QuarterNoteDown.jpg';
import Bar from './Bar.jpg';
import BassClef from './BassClef.jpg';
import Dotted from './Dotted.jpg';
import EighthNote from './EighthNote.jpg';
import EighthRest from './EighthRest.jpg';
import HalfNoteDown from './HalfNoteDown.jpg';
import HalfNoteUp from './HalfNoteUp.jpg';
import HalfRest from './HalfRest.jpg';
import QuarterNoteUp from './QuarterNoteUP.jpg';
import QuarterRest from './QuarterRest.jpg';
import SixteenthNote from './SixteenthNote.jpg';
import SixteenthRest from './SixteenthRest.jpg';
import TrebleClef from './TrebleClef.jpg';
import WholeNote from './WholeNote.jpg';
import WholeRest from './WholeRest.jpg';
import BlankSheetMusic from './BlankSheetMusic.jpg';

function Sheet() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: "\n            * {\n              box-sizing: border-box;\n            }\n            \n            /* Create two unequal columns that floats next to each other */\n        .column {\n            float: left;\n            padding: 10px;\n            height: 300px; /* Should be removed. Only for demonstration */\n        }  \n\n        .left {\n            width: 75%;\n        }\n\n        .right {\n             width: 25%;\n        }\n\n        /* Clear floats after the columns */\n        .row:after {\n             content: \"\";\n             display: table;\n            clear: both;\n        }\n            " }} />
      <div className="row">
        <div className="column left" style={{backgroundColor: '#FFFFFF'}}>
          <h2>              Sheet Music</h2>
          <img src={BlankSheetMusic} alt="BlankSheetMusic" />
        </div>
        <div className="column right" style={{backgroundColor: '#FFFFFF'}}>
          <h2>  Musical Notes</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src={QuarterNoteDown.jpg} atl="QuarterNoteDown" width={100} height={100} />
          <img src={QuarterNoteUp.jpg} atl="QuarterNoteUP" width={100} height={100} />
          <br />
          <br />
          <img src={QuarterRest.jpg} atl="QuarterRest" width={100} height={100} />
          <img src={HalfNoteDown.jpg} atl="HalfNoteDown" width={100} height={100} />
          <br />
          <br />
          <img src={HalfNoteUp.jpg} atl="HalfNoteUp" width={100} height={100} />
          <img src={HalfRest.jpg} atl="HalfRest" width={100} height={100} />
          <br />
          <br />
          <img src={TrebleClef.jpg} atl="TrebleClef" width={100} height={130} />
          <img src={BassClef.jpg} atl="BassClef" width={100} height={100} />
          <br />
          <br />
          <img src={EighthNote.jpg} atl="EighthNote" width={100} height={100} />
          <img src={EighthRest.jpg} atl="EighthRest" width={100} height={100} />
          <br />
          <br />
          <img src={SixteenthNote.jpg} atl="SixteenthNote" width={100} height={100} />
          <img src={SixteenthRest.jpg} atl="SixteenthRest" width={100} height={100} />
          <img src={Dotted.jpg} atl="Dotted" width={50} height={50} />
          <br />
          <br />
          <img src={WholeNote.jpg} atl="WholeNote" width={100} height={100} />
          <img src={WholeRest.jpg} atl="WholeRest" width={100} height={100} />
          <img src={Bar.jpg} atl="Bar" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Sheet;
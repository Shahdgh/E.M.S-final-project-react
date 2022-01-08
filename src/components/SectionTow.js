import { Card } from "react-bootstrap";
import "./SectionTow.css"

function SectionTow() {
    return (  <>
    <div className="caerddb">
      <Card
        imgUrl="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"
        title="Relax"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
      />
      <Card
        imgUrl="https://images.unsplash.com/photo-1516035645781-9f126e774e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Chill"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
      />
      <Card
        imgUrl="https://images.unsplash.com/20/dusty-sky.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        title="Warm"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            deleniti dicta officia temporibus magni! Sint soluta excepturi
            suscipit alias ut!"
      />
    </div>
    </>);
}

export default SectionTow;
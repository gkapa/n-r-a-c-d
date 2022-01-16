import { PinDropSharp } from "@mui/icons-material";
import Navbar from "components/organisms/navbar";
import Footer from "components/organisms/footer";

interface IProps {
  children: React.ReactNode;
}

export default function Fun(props: IProps) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

import { CgChevronLeft } from "react-icons/cg";

type ArrowProps = {
    onClick?: () => void;
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "15%",
            color: "black",
            transform: "translateY(-50%) scale(6)", // <- scale 2
            zIndex: 1000,
            backgroundColor: "transparent",
            height: "10px",
            width: "12px",
            textShadow: "0 0 30px rgb(78, 10, 255)",
        }}
    >
        <CgChevronLeft color="darkBlue" />
    </div>
);

export default PrevArrow;
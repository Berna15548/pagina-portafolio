import {CgChevronRight} from "react-icons/cg";

type ArrowProps = {
    onClick?: () => void;
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        style={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%) scale(2)", // <- scale 2
            zIndex: 1000,
            cursor: "pointer",
        }}
    >
        <CgChevronRight color="white" />
    </div>
);

export default NextArrow;

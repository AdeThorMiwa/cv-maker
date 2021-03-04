import { Button } from "antd";
import { useState } from "react";
import { PageTitle } from "../components";
import { AffiliationModal, CertificationModal, InterestModal } from "./../components/modals";

const Finalize = () => {
    const [isModalVisible, setIsModalVisible] = useState(null);

    const showModal = (which) => {
        setIsModalVisible(which);
    };

    const handleOk = () => {
        setIsModalVisible(null);
    };

    const handleCancel = () => {
        setIsModalVisible(null);
    };

    return (
        <>
            <PageTitle title="Add additional sections to your resume" />
            <div className="d-flex" style={{ flexDirection: "column" }}>
                <Button type="primary" className="additional-buttons" onClick={() => showModal("affiliation")}>Add Affiliations</Button>
                <Button type="primary" className="additional-buttons" onClick={() => showModal("certification")}>Add Certifications</Button>
                <Button type="primary" className="additional-buttons" onClick={() => showModal("interest")}>Add Interests</Button>
            </div>
            <AffiliationModal visible={isModalVisible === "affiliation"} onOk={handleOk} onCancel={handleCancel} />
            <CertificationModal visible={isModalVisible === "certification"} onOk={handleOk} onCancel={handleCancel} />
            <InterestModal visible={isModalVisible === "interest"} onOk={handleOk} onCancel={handleCancel} />
        </>
    );
};

export default Finalize;
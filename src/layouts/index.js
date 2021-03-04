import { Route } from "react-router-dom";
import Helmet from "react-helmet";

const WithLayout = ({
    layout: Layout,
    title,
    component: Component,
    ...rest
}) => {
    window.scrollTo(0, 0);
    return (
        <Route
            {...rest}
            render={(otherProps) => (
                <Layout {...rest} title={title}>
                    <Helmet>
                        <title>Builder - {title}</title>
                    </Helmet>
                    <Component {...otherProps} {...rest} title={title} />
                </Layout>
            )}
        />
    );
};

export default WithLayout;
export { default as BlankLayout } from "./Blank";
export { default as WithSidebarLayout } from "./WithSidebar";
export { default as WithPreviewLayout } from "./WithPreview";
export { default as WithControlsLayout } from "./WithControls";
export { default as MainLayout } from "./Main";
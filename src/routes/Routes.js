import { Switch, useHistory } from "react-router-dom";
import {
    LandingView,
    TemplatesView,
    PersonalView,
    ExperienceView,
    ExperienceSummaryView,
    EducationView,
    EducationSummaryView,
    SkillsView,
    SummaryView,
    FinalizeView,
    PreviewView
} from "../views";
import {
    Intro,
    DoneButton
} from "../components";
import WithLayout, { BlankLayout, WithSidebarLayout, WithPreviewLayout, WithControlsLayout } from "../layouts";

const Routes = () => {
    const history = useHistory();

    return (
        <Switch>
            <WithLayout
                layout={BlankLayout}
                title="Home"
                exact
                component={LandingView}
                path="/"
            />
            <WithLayout
                layout={BlankLayout}
                title="Select a Template"
                component={TemplatesView}
                path="/select-template"
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Personal"
                component={PersonalView}
                path="/personal"
                rightText="NEXT:EXPERIENCE"
                current={0}
                rightAction={() => history.push("/experience-intro")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="What you need to know"
                component={Intro}
                path="/experience-intro"
                current={1}
                headerTitle="Now, let’s fill out your work experience"
                description={[
                    "Employers scan your CV for six seconds to decide if you’re a match.",
                    "We’ll suggest bullet points that make a great impression."
                ]}
                rightAction={() => history.push("/experience")}
            />
            <WithLayout
                layout={WithControlsLayout}
                title="Experience"
                component={ExperienceView}
                path="/experience"
                exact
                current={1}
                rightAction={() => history.push("/experience-summary")}
            />
            <WithLayout
                layout={WithControlsLayout}
                title="Edit Experience"
                component={ExperienceView}
                path="/experience/:id"
                current={1}
                exact
                rightAction={() => history.push("/experience-summary")}
            />
            <WithLayout
                layout={WithControlsLayout}
                title="Experience Summary"
                component={ExperienceSummaryView}
                path="/experience-summary"
                rightText="NEXT:EDUCATION"
                current={1}
                rightAction={() => history.push("/education-intro")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Education - Here's what you need to know"
                component={Intro}
                path="/education-intro"
                rightText="NEXT"
                current={2}
                headerTitle="Great, let’s work on your education"
                description={[
                    "Employers quickly scan the education section.",
                    "We’ll take care of the formatting so it’s easy to find."
                ]}
                rightAction={() => history.push("/education")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Education"
                component={EducationView}
                path="/education"
                rightText="NEXT"
                exact
                current={2}
                rightAction={() => history.push("/education-summary")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Edit Education"
                component={EducationView}
                path="/education/:id"
                rightText="NEXT"
                exact
                current={2}
                rightAction={() => history.push("/education-summary")}
            />
            <WithLayout
                layout={WithControlsLayout}
                title="Education Summary"
                component={EducationSummaryView}
                path="/education-summary"
                rightText="NEXT:SKILLS"
                current={2}
                rightAction={() => history.push("/skills-intro")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Skills - Here's what you need to know"
                component={Intro}
                path="/skills-intro"
                rightText="NEXT"
                headerTitle="Next, let’s take care of your skills"
                description={[
                    "Employers scan skills for relevant keywords.",
                    "We’ll help you choose the best ones."
                ]}
                current={3}
                rightAction={() => history.push("/skills")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Skills"
                component={SkillsView}
                path="/skills"
                rightText="NEXT:SUMMARY"
                current={3}
                rightAction={() => history.push("/summary-intro")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Summary - Here's what you need to know"
                component={Intro}
                path="/summary-intro"
                rightText="NEXT"
                headerTitle="Finally, let’s work on your summary"
                description={[
                    "Your summary shows employers you’re right for their job.",
                    "We’ll help you write a great one with expert content you can customize."
                ]}
                current={4}
                rightAction={() => history.push("/summary")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Summary"
                component={SummaryView}
                path="/summary"
                rightText="NEXT:EXTRA SECTIONS"
                current={4}
                rightAction={() => history.push("/finalize")}
            />
            <WithLayout
                layout={WithPreviewLayout}
                title="Finalize"
                component={FinalizeView}
                path="/finalize"
                rightText="NEXT:PREVIEW"
                current={5}
                rightAction={() => history.push("/preview")}
            />
            <WithLayout
                layout={WithSidebarLayout}
                title="Preview"
                component={PreviewView}
                path="/preview"
                hasSidebar={true}
                current={6}
                right={DoneButton}
            />
        </Switch>
    );
};

export default Routes;

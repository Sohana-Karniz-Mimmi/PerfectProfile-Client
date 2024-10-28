import { Helmet } from "react-helmet-async"
import Main from "../../Components/AdminComponet/OverviewComponent/Main"

const OverviewPage = () => {
  return (
    <div>
      <Helmet>
        <title>Overview - PerfectProfile</title>
      </Helmet>
      
      <Main/>
    </div>
  )
}

export default OverviewPage
import ActorCard from "../actor-card/actor-card";
import './actor-list.scss';

const ActorList = () => {
  return (
    <div className="actors">
      <ActorCard/>
      <ActorCard/>
      <ActorCard/>
      <ActorCard/>
      <ActorCard/>
      <ActorCard/>
    </div>
  )
}

export default ActorList;
import ActorCard from "../actor-card/actor-card";
import './actor-list.scss';

const ActorList = ({data}) => {
  return (
    <div className="actors">
      {
        data.map(el => 
          <ActorCard
            key={el.id}
            id={el.id}
            image={el.profile_path}
            name={el.name}
            alt={el.name}
            character={el.character}
          />
        )
      }
    </div>
  )
}

export default ActorList;
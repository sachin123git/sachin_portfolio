
import Card from './cards'
import { featuresData } from '../../constant/featureData'
import "./feature.css"
export default function feature() {
  return (
    <>
      <section id="features" className="feature">
      <h4 className='h6'>FEATURES</h4>
        <h1 className='h2'>WHAT I DO</h1>
        <div className="m1">
          {featuresData.map((e) => (
            <Card title={e.title} des={e.des} icon={e.icon} key={e.id} />
          ))}
        </div>
      </section>
    </>
  );
}

import { useGLTF} from '@react-three/drei'

function Model(props) {
  const { scene } = useGLTF('https://242035232.fs1.hubspotusercontent-na2.net/hubfs/242035232/bmw_m4_competition_m_package.glb');
  return <primitive object={scene} {...props} />;
}


export default Model;
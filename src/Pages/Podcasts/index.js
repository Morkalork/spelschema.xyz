import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PodItem } from './pod-item';

const Wrapper = styled.div`
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const LabelArea = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const parsePods = (mffPods, otherPods, isChecked) => {
  return [...mffPods, ...(isChecked ? otherPods : [])].flat().sort((a, z) => {
    if (a.date > z.date) {
      return -1;
    } else if (a.date < z.date) {
      return 1;
    }
    return 0;
  });
};

const Podcasts = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [pods, setPods] = useState([]);
  const [mffPods, setMffPods] = useState([]);
  const [otherPods, setOtherPods] = useState([]);

  useEffect(() => {
    Promise.all([fetch('/api/podCasts/mff'), fetch('/api/podCasts/other')])
      .then(([mffData, otherData]) => {
        return Promise.all([mffData.json(), otherData.json()]);
      })
      .then(([mffData, otherData]) => {
        setMffPods(mffData);
        setOtherPods(otherData);
        setPods(parsePods(mffData, otherData, isChecked));
      });
  }, [isChecked]);

  const onCheckChange = () => {
    setPods(parsePods(mffPods, otherPods, !isChecked));
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper className="podcasts">
      <LabelArea>
        <label>
          <input type="checkbox" checked={isChecked} onChange={onCheckChange} />
          Inkludera allsvenska poddar
        </label>
        {pods.length === 0 && (
          <span>
            <br />
            <br />
            <em>Laddar podduleringsdata...</em>
          </span>
        )}
      </LabelArea>
      {pods.map((pod) => (
        <PodItem pod={pod} key={pod.id} />
      ))}
    </Wrapper>
  );
};

export default Podcasts;

# Progress

This is an example component.

```jsx
import { Progress } from 'buzzs-ui';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    border: '6px solid #eee',
    borderRadius: '50%',
    backgroundImage: 'radial-gradient(circle, red, blue)'
};

export default () => <Progress percent={78} style={style}/>
```

import React, { useState } from 'react'
import Modal from '../../components/Modal'
import ToolTip from '../../components/ToolTip'
import Loading from '../../components/Loading'
import Collapse from '../../components/Collapse'
import TagInput from '../../components/TagInput'
import TreeView from '../../components/TreeView'
import AutoLink from '../../components/AutoLink'
import FileDrop from '../../components/FileDrop'
import Carousel from '../../components/Carousel'
import BaseInput from '../../components/BaseInput'
import CountDown from '../../components/CountDown'
import avatar from '../../../static/img/avatar.png'
import BaseSelect from '../../components/BaseSelect'
import LoadFailed from '../../components/LoadFailed'
import StarRating from '../../components/StarRating'
import BaseCheckbox from '../../components/BaseCheckbox'
import RippleButton from '../../components/RippleButton'
import TabHeader, { TabItem } from '../../components/TabHeader'
import { LoadingStatusEnum, LoadingTypeEnum } from '../../types/enum/LoadingStatus'
import Alert from '../../components/Alert'

interface PropsType {
  pageLoading: LoadingStatusEnum
}

export default function Demo(props: PropsType) {
  const { pageLoading } = props
  if (pageLoading == LoadingStatusEnum.LOADING) {
    return <Loading type={LoadingTypeEnum.PAGE} />
  }
  if (pageLoading == LoadingStatusEnum.FAILED) {
    return <LoadFailed />
  }
  const choices = [
    ['grapefruit', 'Grapefruit'],
    ['lime', 'Lime'],
    ['coconut', 'Coconut'],
    ['mango', 'Mango'],
  ]

  const data = {
    lorem: {
      ipsum: 'dolor sit',
      amet: {
        consectetur: 'adipiscing',
        elit: [
          'duis',
          'vitae',
          {
            semper: 'orci',
          },
          {
            est: 'sed ornare',
          },
          'etiam',
          ['laoreet', 'tincidunt'],
          ['vestibulum', 'ante'],
        ],
      },
      ipsumsss: 'primis',
    },
  }
  const options = [{ label: 'Item 1' }, { label: 'Item Two', checked: true }, { label: 'Item 3' }]

  const [isModal, setModal] = useState(false)
  console.log(isModal)
  return (
    <React.Fragment>
      <Alert message="hi bricechou, nice to meet u." type={'success'} visable={true} />
      <Carousel
        carouselItems={[
          <img src={avatar} alt="404 Page not found" width={'10%'} height={'10%'} />,
          <img src={avatar} alt="404 Page not found" width={'12%'} height={'12%'} />,
          <img src={avatar} alt="404 Page not found" width={'10%'} height={'10%'} />,
        ]}
      />
      <FileDrop onDrop={console.log} />
      <RippleButton onClick={console.log}> heelp </RippleButton>
      <ToolTip text="这里隐藏了某些秘密哟～">
        llll <br />
        ssssss
        <br />
      </ToolTip>
      <div>
        请打分 <br />
        <StarRating value={2} />
      </div>
      <TagInput defaultTags={['sss', 'bricechou']} />
      <BaseInput
        boxClassName={''}
        inputClassName={''}
        labelClassName={''}
        errorClassName={''}
        onInput={console.log}
        inputWarpperClassName={''}
        defaultValue={'hello word!'}
        placeholder={'请输入'}
      />
      <BaseCheckbox options={options} onChange={console.log} />
      <BaseSelect values={choices} defaultValue={'lime'} onChange={console.log} />
      <Collapse>
        <h1>This is a collapse</h1>
        <p>Hello world!</p>
      </Collapse>
      <TreeView data={data} label="data" />
      <CountDown hours="0" minutes="0" seconds="160" />
      <button onClick={() => setModal(true)}>Click modal Here</button>
      <Modal
        visible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={
          <>
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModal(false)}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={() => setModal(false)}>
              Save changes
            </button>
          </>
        }
        onClose={() => setModal(false)}
      />
      <TabHeader defaultIndex={1} onTabClick={console.log}>
        <TabItem label={'Hellp'} index={1}>
          <AutoLink text="foo bar baz http://bricechou.github.io bar" />
        </TabItem>
        <TabItem label={'Not Hellp'} index={2}>
          asdasdasdasdasdas <br />
          asdasdasd
        </TabItem>
      </TabHeader>
    </React.Fragment>
  )
}

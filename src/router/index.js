import {router} from 'san-router'

import App from "../app.san"
import One from "../template/one.san"
import Two from "../template/two.san"
import Three from "../template/three.san"

router.add({rule: '/', Component: App, target: '#root'})
router.add({rule: '/one', Component: One, target: '#root'})
router.add({rule: '/two', Component: Two, target: '#root'})
router.add({rule: '/three', Component: Three, target: '#root'})
router.start()

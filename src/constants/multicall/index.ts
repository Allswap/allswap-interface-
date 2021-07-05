import { ChainId } from 'allswap-sdk'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../allswap_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '0x1d5185997C2Dd57DDc7CBEcee730C80d10733070',
  [ChainId.MATIC]: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  [ChainId.MATIC_TESTNET]: '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc',
  [ChainId.XDAI]: '0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a',
  [ChainId.BSC]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.BSC_TESTNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

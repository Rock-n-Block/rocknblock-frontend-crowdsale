import {h} from 'preact';
import {CaseStudiesContentI, CaseStudiesDropdownI} from "../../types";

export const content: CaseStudiesContentI[][] = [
    [
        {
            source: 'logo-ducatus',
            alt: 'ducatus logo',
            name: 'DUCATUS Wallet',
            number: 1
        },
        {
            source: 'logo-census',
            alt: 'census logo',
            name: 'Census Wallet',
            number: 2
        },
        {
            source: 'logo-quras',
            alt: 'quras logo',
            name: 'QURAS',
            number: 3
        },
        {
            source: 'logo-hex',
            alt: 'hex logo',
            name: 'HEX',
            number: 4
        },
    ],
    [
        {
            source: 'logo-pion',
            alt: 'pion logo',
            name: 'Pion',
            number: 1
        },
        {
            source: 'logo-inflat',
            alt: 'inflat logo',
            name: 'Inflationary Staking',
            number: 2
        },
        {
            source: 'logo-bitgear',
            alt: 'bitgear logo',
            name: 'Bitgear',
            number: 3
        },
        {
            source: 'logo-minto',
            alt: 'minto logo',
            name: 'Minto',
            number: 4
        },
        {
            source: 'logo-axion',
            alt: 'axion logo',
            name: 'Axion Dashboard',
            number: 5
        },
        {
            source: 'logo-ducatus',
            alt: 'ducatus logo',
            name: 'Ducatus',
            number: 6
        },
    ]
];

export const dropdown: CaseStudiesDropdownI[][] = [
    [
        {
            key: 1,
            name: 'ducatus',
            title: 'DUCATUS Wallet',
            images: [
                '../../assets/img/case-ducatus-1.png',
                '../../assets/img/case-ducatus-2.png',
                '../../assets/img/case-ducatus-3.png'
            ],
            description: 'Full functional custodial wallet development for IOS, Android and web, ' +
                'with more than 10,000 installs.',
            features: [
                'Blockchain development',
                'Mobile wallet application development',
                'Crowdfunding platform',
                'Online stores with crypto support'
            ],
            stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
        },
        {
            key: 2,
            name: 'census',
            title: 'Census Wallet',
            images: [
                '../../assets/img/case-census-1.png',
                '../../assets/img/case-census-2.png',
                '../../assets/img/case-census-3.png'
            ],
            description: 'Census wallet is an app that enables you to control Open Finance by Tangem Card. ' +
                'Available on IOS and Android devices.',
            features: ['Tangem integration',
                'Open Finance',
                'Loans',
                'Staking',
                'Digital Assets Investments'
            ],
            stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
        },
        {
            key: 3,
            name: 'quras',
            title: 'QURAS wallet',
            images: [
                '../../assets/img/case-quras-1.png',
                '../../assets/img/case-quras-2.png',
                '../../assets/img/case-quras-3.png'
            ],
            description: 'Quras wallet is a tool that allows for interacting with the secret contract platform and fulfill ' +
                'various privacy protection needs.',
            features: ['Private blockchain integrations', 'Cross-blockchain swap'],
            stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
        },
        {
            key: 4,
            name: 'hex',
            title: 'HEX',
            images: [
                '../../assets/img/case-hex-1.png',
                '../../assets/img/case-hex-2.png',
                '../../assets/img/case-hex-3.png'
            ],
            description: '',
            features: ['QR', 'Smart Contract Integration'],
            stacks: ['Web3js', 'Solidity', 'JavaScript', 'Openzeppelin', 'Truffle']
        },
    ],
    [
        {
            key: 1,
            name: 'pion',
            title: 'Pion',
            images: [
                '../../assets/img/case-pion-1.png',
                '../../assets/img/case-pion-2.png'
            ],
            description: <p>A stablecoin with a token price of $1 by changing the total supply of tokens through a smart
                contract
                by rebase at a random time.<br />A second token convertible with the stablecoin at rate of 1:1, allows to
                fix the number of tokens pending the next rebase at a more favorable rate.<br />Stablecoin can generate
                income from yield farming by staking the LP2 Uniswap token.</p>,
            features: ['Multicomponent system', 'Stablecoin', 'Liquidity Pool Staking'],
            stacks: ['Solidity']
        },
        {
            key: 2,
            name: 'inflat',
            title: 'Inflationary Staking',
            images: [
                '../../assets/img/case-inflat-1.png',
                '../../assets/img/case-inflat-2.png'
            ],
            description: <p>A project based on complex smart contracts that give users the ability to exchange, purchase
                and
                stake the token.<br /> Receiving tokens is implemented in several ways:<br />
                • Exchange tokens at the rate of 1:1<br />
                • Free issuance of tokens from a snapshot with a Merkle tree check at a rate of 1:1<br />
                • Instant Token Buyback Auction with Uniswap to Maintain the Token Price<br />
                • Staking and receiving dividends due to token inflation.</p>,
            features: [],
            stacks: ['Solidity']
        },
        {
            key: 3,
            name: 'bitgear',
            title: 'Bitgear',
            images: [
                '../../assets/img/case-bitgear-1.png',
                '../../assets/img/case-bitgear-2.png'
            ],
            description: 'By using the Ox protocol, Bitgear helps to find the best prices across exchanges and combines them' +
                ' into one trade.',
            features: [
                '0x protocol integration',
                'all DEXs trading',
                'limit orders',
                'multiple wallets support'
            ],
            stacks: ['React', 'Web3', '0x protocol', 'Solidity']
        },
        {
            key: 4,
            name: 'minto',
            title: 'Minto',
            images: [
                '../../assets/img/case-minto-1.png',
                '../../assets/img/case-minto-2.png'
            ],
            description: 'Mine Bitcoin by staking BTCMT tokens. We’ve made smart contracts and crosschain integration between blockchains' +
                ' that helps to make mining easier than getting a BTC wallet.',
            features: [
                'HECO blockchain integration',
                'staking',
                'mining tokenization',
            ],
            stacks: ['React', 'Web3', 'Python', 'Solidity']
        },
        {
            key: 5,
            name: 'axion',
            title: 'Axion Dashboard',
            images: [
                '../../assets/img/case-axion-1.png',
                '../../assets/img/case-axion-2.png'
            ],
            description: <p>The dashboard visualizes financial statistics of the context of individual user wallets and
                time periods.<br />
                To implement instant access to all information on the project, a centralized database was developed that
                stores all information about events occurring on the contract, received in real time from the Ethereum
                network.</p>,
            features: ['Staking', 'Auction', 'H2T token swap', 'Uniswap auto-buy', 'Dashboard'],
            stacks: ['Solidity']
        },
        {
            key: 6,
            name: 'duc',
            title: 'Ducatus',
            images: [
                '../../assets/img/case-duc-1.png',
                '../../assets/img/case-duc-2.png'
            ],
            description: 'Infrastructure creation and deployment of Ducatus and DucatusX blockchains. Blockchain tools' +
                ' development: API, explorer/insight, scanner and wallet. Network and user maintenance support. Application' +
                ' development for created blockchains, integration with exchanges and other blockchains.',
            features: [
                'custom blockchains development',
                'explorer'
            ],
            stacks: ['Angular', 'React', 'Web3', 'Ionic', 'Cordova', 'Solidity']
        },
    ]
];

export const tabs: string[] = ['Smart contracts', 'web/mobile development'];
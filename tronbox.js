const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey: process.env.PRIVATE_KEY_MAINNET || "0f84e57f01d3ee0512c859acf135d4184687de6bcf66c5ccf11f0f3880636506",
      /*
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FEC...656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

      */
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: process.env.PRIVATE_KEY_SHASTA || "0f84e57f01d3ee0512c859acf135d4184687de6bcf66c5ccf11f0f3880636506",
      userFeePercentage: 50,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE || "0f84e57f01d3ee0512c859acf135d4184687de6bcf66c5ccf11f0f3880636506",
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://nile.trongrid.io',
      network_id: '3'
    },
    development: {
      // For tronbox/tre docker image
      privateKey: '86134c8a51446c21b501f3a05844e18fdb72d3a5420867737c8640ce0ec656ca',
      userFeePercentage: 0,
      feeLimit: 1000 * 1e6,
      fullHost: 'http://127.0.0.1:' + 9090,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.5.4'
      }
    }
  },
  // solc compiler optimize
  solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200
  //   },
  //   evmVersion: 'istanbul'
  }
}

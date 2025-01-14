    let uname = "Arun.R";


    let Productpurchase = 10;
    let Bonuspoint = 5;

    if(Productpurchase >= 1 && Productpurchase <= 25)
        {
        TotalBonus = Productpurchase * Bonuspoint
        console.log(`Hi ${uname} Total Bonus Point is : ${TotalBonus}`)

            if(TotalBonus == 100 )
                {
                console.log(`You got Gift Voucher worth of ${TotalBonus}rs.`)
                }
        }

    else if(Productpurchase >= 26 && Productpurchase <= 50)
        {
        TotalBonus = Productpurchase * Bonuspoint
        console.log(`Hi ${uname} Total Bonus Point is : ${TotalBonus}`)

            if(TotalBonus == 200 )
                {
                console.log(`You got Gift Voucher worth of ${TotalBonus}rs.`)
                }
        }

    else if(Productpurchase >= 51 && Productpurchase <= 75)
        {
            TotalBonus = Productpurchase * Bonuspoint
            console.log(`Hi ${uname} Total Bonus Point is : ${TotalBonus}`)
            
            if(TotalBonus == 300 )
                {
                    console.log(`You got Gift Voucher worth of ${TotalBonus}rs.`)
                }
        }

    else if(Productpurchase >= 76 && Productpurchase <= 100)
        {
            TotalBonus = Productpurchase * Bonuspoint
            console.log(`Hi ${uname} Total Bonus Point is : ${TotalBonus}`)

            if(TotalBonus == 400 )
                {
                    console.log(`You got Gift Voucher worth of ${TotalBonus}rs.`)
                }
        }

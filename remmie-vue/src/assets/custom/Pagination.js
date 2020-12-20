export default function ComputePagination(current,lastPage,offset){
    let retVal = []
    let counter = 1;

    if (current-offset > 1){
        retVal.push({
            page: '1',
            value: 1,
        });
        counter = current-offset;
        if (counter == 3){
            retVal.push({
                page: '2',
                value: 2,
            });
        }else if (counter > 3){
            retVal.push({
                page: '...',
                value: counter-1,
            });
        }
    }

    for ( ; counter<current ; counter++){
        retVal.push({
            page: counter.toString(),
            value: counter,
        });
    }
    for (counter=0 ; current<=lastPage && counter<=offset ; current++,counter++){
        retVal.push({
            page: current.toString(),
            value: current,
        });
    }
    if (current <= lastPage){
        if (current < lastPage-1){
            retVal.push({
                page: '...',
                value: current,
            });
        }else if (current < lastPage){
            retVal.push({
                page: (lastPage-1).toString(),
                value: lastPage-1,
            });
        }
        retVal.push({
            page: lastPage.toString(),
            value: lastPage,
        });
    }
    return retVal;
}